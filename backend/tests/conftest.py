import asyncio
import base64
import pytest
from fastapi.testclient import TestClient
import sqlalchemy as sa

from src.settings.config import EXCHANGE_LOGIN, EXCHANGE_PASSWORD
from src.main import app
from src.apps.models import *
from src.settings.db import async_session_maker

client = TestClient(app)


@pytest.fixture(scope="session", autouse=True)
def event_loop():
    """Overrides pytest default function scoped event loop"""
    policy = asyncio.get_event_loop_policy()
    loop = policy.new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="session", autouse=True)
async def add_data():
    async with async_session_maker() as session:
        stmt = sa.insert(NeuralModel).values(name="model1", type="content_based")
        await session.execute(stmt)
        await session.commit()

        stmt = sa.insert(NeuralModel).values(name="model2", type="hybrid")
        await session.execute(stmt)
        await session.commit()

        stmt = sa.insert(Book).values(
            external_id=10,
            name="python for stupid",
            description="very good book!",
            meta=None,
        )
        await session.execute(stmt)
        await session.commit()

        stmt = sa.insert(Book).values(
            external_id=11,
            name="python for genius",
            description="simple good book",
            meta=None,
        )
        await session.execute(stmt)
        await session.commit()

        book_id = await Book.get_book_id(external_id=10)
        book_recommended = await Book.get_book_id(external_id=11)

        stmt = sa.insert(Recommendation).values(
            book_id=book_id,
            book_recommended=book_recommended,
            order=1,
            model=1,
            distance={"euclid": -1.0, "manhattan": -1.0, "cos": -1.0},
        )
        await session.execute(stmt)
        await session.commit()


@pytest.fixture(scope="session", autouse=True)
def final(request, event_loop):
    def delete_data():
        async def a_delete_data():
            async with async_session_maker() as session:
                book_id = await Book.get_book_id(10)
                stmt = sa.delete(Recommendation).where(
                    Recommendation.book_id == book_id
                )
                await session.execute(stmt)
                stmt = sa.delete(Book).where(Book.external_id == 10)
                await session.execute(stmt)
                stmt = sa.delete(Book).where(Book.external_id == 11)
                await session.execute(stmt)
                stmt = sa.delete(NeuralModel).where(NeuralModel.name == "model1")
                await session.execute(stmt)
                stmt = sa.delete(NeuralModel).where(NeuralModel.name == "model2")
                await session.execute(stmt)
                await session.commit()

        event_loop.run_until_complete(a_delete_data())

    request.addfinalizer(delete_data)


@pytest.fixture(scope="session")
def auth_user():
    auth_header = f"{EXCHANGE_LOGIN}:{EXCHANGE_PASSWORD}".encode("utf-8")
    encoded_auth_header = base64.b64encode(auth_header).decode("utf-8")
    headers = {"Authorization": f"Basic {encoded_auth_header}"}
    return headers
