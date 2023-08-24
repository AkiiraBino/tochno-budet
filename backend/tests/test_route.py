import base64
import pytest
import sqlalchemy as sa

from src.settings.config import EXCHANGE_LOGIN, EXCHANGE_PASSWORD
from src.apps.models import *
from .conftest import client


def test_content_based_unauth():
    response = client.get("/api/v1/recommendation/content_based/")
    assert response.status_code == 401


@pytest.mark.usefixtures("auth_user")
def test_content_based_auth_error(auth_user):
    response = client.get("/api/v1/recommendation/content_based/", headers=auth_user)
    assert response.status_code == 422


@pytest.mark.usefixtures("auth_user")
def test_content_based_auth_empty(auth_user):
    params = {"book_id": "0"}
    response = client.get(
        "/api/v1/recommendation/content_based/", headers=auth_user, params=params
    )
    assert response.status_code == 200
    assert response.json() == {"model": "rubert", "book_id": "0", "recommended": []}


@pytest.mark.usefixtures("auth_user")
def test_content_based_auth(auth_user):
    params = {"book_id": "10", "limit": "1", "model": "model1"}
    response = client.get(
        "/api/v1/recommendation/content_based/", headers=auth_user, params=params
    )
    assert response.status_code == 200
    assert response.json() == {
        "model": "model1",
        "book_id": "10",
        "recommended": [
            {
                "book_recommended_id": "11",
                "order": 1,
                "distance": {"cos": -1, "euclid": -1, "manhattan": -1},
            }
        ],
    }


@pytest.mark.usefixtures("auth_user")
def test_get_nueral_model(auth_user):
    params = {"type_model": "content-based"}
    response = client.get("/api/v1/models/name", headers=auth_user, params=params)
    assert response.status_code == 200
    assert response.json() == [{"id": 1, "name": "model1", "type": "content-based"}]
