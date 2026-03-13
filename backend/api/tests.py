from django.test import TestCase


class ApiTests(TestCase):
    def test_health_endpoint(self):
        response = self.client.get("/api/health")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    def test_portfolio_endpoint(self):
        response = self.client.get("/api/portfolio")

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload["profile"]["name"], "Ishika")
        titles = {project["title"] for project in payload["projects"]}
        self.assertGreaterEqual(len(payload["projects"]), 11)
        self.assertIn("Accessible Roll Chair", titles)
        self.assertIn("Ishika Portfolio", titles)
