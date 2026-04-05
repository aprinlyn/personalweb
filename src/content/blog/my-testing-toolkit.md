---
title: "My Testing Toolkit: Tools I Use Every Day as an SDET"
description: "A curated list of the testing tools, frameworks, and utilities I rely on daily for test automation, API testing, and quality assurance."
pubDate: 2026-04-04
tags: ["testing", "automation", "tools", "sdet"]
---

# My Testing Toolkit: Tools I Use Every Day as an SDET

After years of working in quality engineering, I've settled on a toolkit that covers most testing scenarios. Here's what I reach for daily and why.

## API Testing: Postman & REST Assured

For API testing, I use a combination of tools depending on the context:

- **Postman** for exploratory testing, quick debugging, and sharing collections with the team
- **REST Assured** for automated API test suites — great for validating response bodies, status codes, and headers in a fluent, readable syntax
- **Newman** for running Postman collections in CI pipelines

```java
given()
  .contentType(ContentType.JSON)
  .body(requestBody)
.when()
  .post("/api/users")
.then()
  .statusCode(201)
  .body("id", notNullValue());
```

## Test Automation: Java, Cucumber & Serenity BDD

My primary automation stack is built around Java with a BDD approach:

- **Cucumber** for writing human-readable feature files using Gherkin syntax — great for collaboration between QA, dev, and business stakeholders
- **Serenity BDD** as the test automation framework — provides rich living documentation, detailed test reports, and seamless integration with Cucumber
- **JUnit** for unit testing — simple, reliable, and well-supported across all Java projects

```java
@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
  features = "src/test/resources/features",
  glue = "com.example.steps"
)
public class TestRunner {}
```

## Monitoring & Debugging

Good monitoring is half the battle in quality engineering:

- **Grafana** for dashboards, alerting, and visualizing application metrics over time
- **Kibana** for log analysis and searching through application logs during incident investigation
- **Browser DevTools** — still the most powerful front-end debugging tool available
- **Charles Proxy** for intercepting and inspecting HTTP/HTTPS traffic between client and server

## CI/CD: Jenkins & Git

Automating the pipeline is essential for continuous quality:

- **Jenkins** for orchestrating test execution, scheduling regression runs, and integrating with the build pipeline
- **Git** for version control — feature branches, pull request reviews, and keeping test code alongside application code

## The Bottom Line

The best tool is the one your team will actually use. Start simple, add complexity only when needed, and always prioritize test reliability over test count.
