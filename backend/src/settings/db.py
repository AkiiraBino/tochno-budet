# database
from sqlalchemy import MetaData
from sqlalchemy.pool import NullPool
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker, declared_attr
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from src.settings.config import SQLALCHEMY_ASYNC_DATABASE_URL

# TODO оптимизировать управление пулами

async_engine = create_async_engine(
    SQLALCHEMY_ASYNC_DATABASE_URL,
    echo=True,
    future=True,
    poolclass=NullPool,
)


async_session_maker = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False, autoflush=True
)

async_session_maker = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False, autoflush=True
)


async def get_async_session() -> AsyncSession:
    async with async_session_maker() as session:
        yield session


class DeclarativeBaseOverload:
    """Description of class Table
    This class implementing Basic Table configuration for using.
    example:

    from settings.db import Table

    class ModelName(table):
        ...
    """

    @declared_attr
    def __tablename__(self):
        """
        overrided propetry __tablename__ for auto set table of class
        """
        folder_name = self.__module__.split(".")[-2]
        class_name = self.__name__.lower()
        return f"{folder_name}_{class_name}"


Base = declarative_base(cls=DeclarativeBaseOverload)
metadata = Base.metadata
