from django.http import JsonResponse
from django.utils import timezone

from .portfolio_data import PORTFOLIO_PAYLOAD


def json_response(payload, status=200):
    response = JsonResponse(payload, status=status)
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Content-Type"
    return response


def health(request):
    return json_response(
        {
            "service": "ishika-portfolio-backend",
            "status": "ok",
            "timestamp": timezone.now().isoformat(),
        }
    )


def portfolio(request):
    return json_response(PORTFOLIO_PAYLOAD)
