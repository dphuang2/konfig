import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SecodaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="secoda-typescript-sdk"
      metaDescription={`The all-in-one data management platform. Secoda is the first AI powered data search, catalog, lineage, and monitoring platform to double your data team's efficiency.

Data teams at companies like Panasonic, Mode, and Vanta use Secoda to automate data discovery, documentation, and take the grunt-work out of their day.

By automatically ingesting the metadata across all of your data sources, Secoda makes it easy to make decisions from a single source of truth.

Built for users of the modern data stack, Secoda helps data teams take control of their data sprawl and reliably scale their tech stacks.

With Secoda, data teams save time and enable revenue teams with better data, faster.`}
      company="Secoda"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/logo.png"
      companyKebabCase="secoda"
      clientNameCamelCase="secoda"
      homepage="secoda.co"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["data_management"]}
      methods={[
  {
    "url": "/integration/integrations",
    "method": "listActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "List Integrations",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "The type of integrations to filter.",
        "example": "bigquery"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/integration/integrations",
    "method": "createNewIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Create a New Integration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sample Integration"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "custom"
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "4c0e07c0-306a-4f4e-8b2b-6a8d7a33d251",
          "a5423e2e-93b8-4b2c-af3c-7b7f0eefea14"
        ]
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": "",
        "example": {}
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/integration/integrations/{integration_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Get Integration by ID",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the integration to retrieve.",
        "example": "d31e59c7-cd52-4398-9d6e-da313a7b7775"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Integration not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/integration/integrations/{integration_id}/import_metadata",
    "method": "uploadMetadataCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Upload Integration Metadata (via CSV)",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the integration to upload metadata for.",
        "example": "d31e59c7-cd52-4398-9d6e-da313a7b7775"
      },
      {
        "name": "file",
        "schema": "string",
        "description": "",
        "example": "path/to/your/file.csv"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Integration metadata uploaded successfully."
      },
      {
        "statusCode": "404",
        "description": "Integration not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/integration/integrations/{integration_id}/import_jsonl_metadata",
    "method": "uploadJsonlMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Upload Integration Metadata (via JSONL)",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the integration to upload metadata and/or lineage for.",
        "example": "d31e59c7-cd52-4398-9d6e-da313a7b7775"
      },
      {
        "name": "resources_file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "path/to/your/resources_file.jsonl"
      },
      {
        "name": "lineages_file",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "path/to/your/lineages_file.jsonl"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Integration JSONL file uploaded successfully."
      },
      {
        "statusCode": "404",
        "description": "Integration not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/databases",
    "method": "listAllActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "List Databases",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "The title of the database to search for.",
        "example": "customers"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/databases",
    "method": "createNewDatabase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Create a New Database",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/databases/{database_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Databases",
    "typeScriptTag": "databases",
    "description": "Get Database by ID",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the database to retrieve.",
        "example": "27498d73-db31-4a4e-8cf0-faccff1bed0f"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Database not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/schemas",
    "method": "listWithFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schemas",
    "typeScriptTag": "schemas",
    "description": "List Schemas",
    "parameters": [
      {
        "name": "parent",
        "schema": "string",
        "description": "The ID of the parent database to filter by."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "The title of the schema to filter by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/schemas",
    "method": "createNewSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schemas",
    "typeScriptTag": "schemas",
    "description": "Create a New Schema",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/schemas/{schema_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schemas",
    "typeScriptTag": "schemas",
    "description": "Get Schema by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Schema not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/schemas/{schema_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Schemas",
    "typeScriptTag": "schemas",
    "description": "Update Schema by ID",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "404",
        "description": "Schema not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/tables",
    "method": "listTablesByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tables",
    "typeScriptTag": "tables",
    "description": "List Tables",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Integration ID",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "ID of the schema",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Title of the table",
        "example": "Sample Table"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/tables",
    "method": "createNewTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tables",
    "typeScriptTag": "tables",
    "description": "Create a New Table",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/tables/{table_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tables",
    "typeScriptTag": "tables",
    "description": "Delete Table by ID",
    "parameters": [
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "ID of the table to delete",
        "example": "e7691426-2c2a-46b4-98e7-d09d0b82b2b1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Table deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Table not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/tables/{table_id}",
    "method": "getTableById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tables",
    "typeScriptTag": "tables",
    "description": "Get Table by ID",
    "parameters": [
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "ID of the table to retrieve",
        "example": "d935a76c-2125-4c30-9389-ef42fa7e23bb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Table not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/tables/{table_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tables",
    "typeScriptTag": "tables",
    "description": "Update Table by ID",
    "parameters": [
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "ID of the table to update",
        "example": "d935a76c-2125-4c30-9389-ef42fa7e23bb"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "404",
        "description": "Table not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/columns",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Columns",
    "typeScriptTag": "columns",
    "description": "List Columns",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Optional. Filter columns by integration identifier.",
        "example": "6c69de0f-b269-4380-bcf5-0686de276b9e"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Optional. Filter columns by parent identifier. This could be the ID of the table or of the parent column in the case of nested columns.",
        "example": "c444bc26-433e-4cd2-b3ee-f5a1fbb2caf8"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Optional. Filter columns by title of the column.",
        "example": "Sample Column"
      },
      {
        "name": "tableTitle",
        "schema": "string",
        "description": "Optional. Filter columns by title of the table that the columns belong to. If several integrations have the same naming of tables, it is recommended to combine this with the `integration_id`.",
        "example": "Sample Table"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/columns",
    "method": "createNewColumn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Columns",
    "typeScriptTag": "columns",
    "description": "Create a New Column",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/columns/{column_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Columns",
    "typeScriptTag": "columns",
    "description": "Delete Column by ID",
    "parameters": [
      {
        "name": "columnId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the column to delete.",
        "example": "8b2e01e0-603b-4559-8eac-4e16ecc61fc7"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Column deleted successfully."
      },
      {
        "statusCode": "404",
        "description": "Column not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/columns/{column_id}",
    "method": "getColumnById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Columns",
    "typeScriptTag": "columns",
    "description": "Get Column by ID",
    "parameters": [
      {
        "name": "columnId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the column to retrieve.",
        "example": "8b2e01e0-603b-4559-8eac-4e16ecc61fc7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Column not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/table/columns/{column_id}",
    "method": "editById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Columns",
    "typeScriptTag": "columns",
    "description": "Edit Column by ID",
    "parameters": [
      {
        "name": "columnId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the column to retrieve.",
        "example": "8b2e01e0-603b-4559-8eac-4e16ecc61fc7"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Column not found."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/dashboard/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboard Groups",
    "typeScriptTag": "dashboardGroups",
    "description": "List Dashboard Groups",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "Filter groups by title",
        "example": "Sample Group"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboard Groups",
    "typeScriptTag": "dashboardGroups",
    "description": "Create a New Dashboard Group",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/groups/{group_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboard Groups",
    "typeScriptTag": "dashboardGroups",
    "description": "Get Dashboard Group by ID",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "ID of the dashboard group to retrieve",
        "example": "43d7c33d-ad74-4dfb-bfad-c172f6701afb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/dashboards",
    "method": "listWithFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "List Dashboards",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Filter by integration ID",
        "example": "cf103b47-8576-4467-ad34-384cd523abd9"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Filter by parent ID",
        "example": "43d7c33d-ad74-4dfb-bfad-c172f6701afb"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Filter by title",
        "example": "Sample Dashboard"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/dashboards",
    "method": "createNewDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Create a new Dashboard",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/dashboards/{dashboard_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Delete Dashboard by ID",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard to delete.",
        "example": "0b3938f4-692c-4d78-b40c-247c75dc6930"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/dashboards/{dashboard_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get Dashboard by ID",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard to retrieve.",
        "example": "226dc8aa-fa8d-4646-8b11-6652cdc64065"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/dashboards/{dashboard_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Update Dashboard by ID",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "string",
        "required": true,
        "description": "The ID of the dashboard to update.",
        "example": "226dc8aa-fa8d-4646-8b11-6652cdc64065"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/charts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "List Charts",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Filter by integration ID",
        "example": "cf103b47-8576-4467-ad34-384cd523abd9"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Filter by parent ID",
        "example": "226dc8aa-fa8d-4646-8b11-6652cdc64065"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Filter by title",
        "example": "Sample Chart"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/charts",
    "method": "createNewChart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "Create a new Chart",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/charts/{chart_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "Delete Chart by ID",
    "parameters": [
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "45813776-8934-442d-adf7-74ec921c53bf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/charts/{chart_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "Get Chart by ID",
    "parameters": [
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "The ID of the chart to retrieve.",
        "example": "45813776-8934-442d-adf7-74ec921c53bf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dashboard/charts/{chart_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Charts",
    "typeScriptTag": "charts",
    "description": "Update Chart by ID",
    "parameters": [
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "The ID of the chart to update.",
        "example": "45813776-8934-442d-adf7-74ec921c53bf"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/lineage/manual",
    "method": "listObjectsWithFiltering",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lineage",
    "typeScriptTag": "lineage",
    "description": "List Lineage",
    "parameters": [
      {
        "name": "fromEntityIn",
        "schema": "string",
        "description": "",
        "example": "7879886b-9e0e-4d02-8b37-c7d3c496a587"
      },
      {
        "name": "toEntityIn",
        "schema": "string",
        "description": "",
        "example": "b500ef23-c9b4-4259-a87d-d77b8b588f06"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/lineage/manual",
    "method": "createNewLineageManually",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lineage",
    "typeScriptTag": "lineage",
    "description": "Create new Lineage",
    "parameters": [
      {
        "name": "from_entity",
        "schema": "string",
        "description": "",
        "example": "7879886b-9e0e-4d02-8b37-c7d3c496a587"
      },
      {
        "name": "to_entity",
        "schema": "string",
        "description": "",
        "example": "b500ef23-c9b4-4259-a87d-d77b8b588f06"
      },
      {
        "name": "direction",
        "schema": "string",
        "description": "",
        "example": "DOWNSTREAM"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/lineage/manual/{lineage_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lineage",
    "typeScriptTag": "lineage",
    "description": "Delete Lineage by ID",
    "parameters": [
      {
        "name": "lineageId",
        "schema": "string",
        "required": true,
        "description": "The ID of the lineage entry to delete.",
        "example": "34d983b3-bfe0-4b49-abea-0692c8be6693"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/lineage/manual/{lineage_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lineage",
    "typeScriptTag": "lineage",
    "description": "Get Lineage by ID",
    "parameters": [
      {
        "name": "lineageId",
        "schema": "string",
        "required": true,
        "description": "The ID of the lineage entry to retrieve.",
        "example": "34d983b3-bfe0-4b49-abea-0692c8be6693"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tag",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tag",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a new Tag",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a sample tag."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Sample Tag"
      },
      {
        "name": "color",
        "schema": "string",
        "description": "",
        "example": "#4299E1"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tag/{tag_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete Tag by ID",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tag to delete.",
        "example": "69e0b863-8bb8-47e1-b566-8b8d57441c70"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tag/{tag_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get Tag by ID",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tag to retrieve.",
        "example": "69e0b863-8bb8-47e1-b566-8b8d57441c70"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tag/{tag_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update Tag by ID",
    "parameters": [
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tag to update.",
        "example": "38040671-8f1d-4322-b895-4fd7b73317bf"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "#316650"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/user",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/user",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a New User",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Sample"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "User"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "sample@sample.com"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "editor"
      },
      {
        "name": "_role",
        "schema": "string",
        "description": "",
        "example": "editor"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/user/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to delete.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/user/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to retrieve.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/user/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to update.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "Sample"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "User"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "User not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/teams",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List Teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/teams",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create a New Team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is the best team in this workspace."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Test Team"
      },
      {
        "name": "icon",
        "schema": "string",
        "description": "",
        "example": "😀"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "OPEN"
      },
      {
        "name": "sidebar_settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/teams/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Delete Team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the team to delete.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/teams/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get Team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the team to retrieve.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/teams/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update Team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the team to update.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Team"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "User not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/group",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "List User Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/group",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Create a New User Group",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Users responsible for keeping documentation up to date."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Data Stewards"
      },
      {
        "name": "icon",
        "schema": "string",
        "description": "",
        "example": "😀"
      },
      {
        "name": "users",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/group/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Delete User Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the group to delete.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/group/{id}",
    "method": "getUserGroupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Get User Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the group to retrieve.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/auth/group/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Update User Group by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the group to update.",
        "example": "3131f219-16bb-4c95-853a-894ae12db42a"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Group"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "User not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dictionary/terms",
    "method": "getListByTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "List Dictionary Terms",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "Filter terms by title (https://docs.secoda.co/",
        "example": "Sample Dictionary Term"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dictionary/terms",
    "method": "createNewTerm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Create a New Dictionary Term",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dictionary/terms/{term_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Delete Dictionary Term by ID",
    "parameters": [
      {
        "name": "termId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the dictionary term to delete",
        "example": "61ce0a34-ce90-4f1a-a135-f122dcbed242"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Term deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Term not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dictionary/terms/{term_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Get Dictionary Term by ID",
    "parameters": [
      {
        "name": "termId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the dictionary term",
        "example": "61ce0a34-ce90-4f1a-a135-f122dcbed242"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Term not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/dictionary/terms/{term_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Terms",
    "typeScriptTag": "terms",
    "description": "Edit Dictionary Term by ID",
    "parameters": [
      {
        "name": "termId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the dictionary term to edit",
        "example": "61ce0a34-ce90-4f1a-a135-f122dcbed24"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Term not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/collection/collections",
    "method": "listCollectionsByTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List Collections",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "Filter collections by title (https://docs.secoda.co/",
        "example": "Sample Collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/collection/collections",
    "method": "createNewCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Create a New Collection",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/collection/collections/{collection_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Delete Collection by ID",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the collection to delete",
        "example": "3ea9a7c2-9538-46a0-899d-b2018c80113c"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Collection deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Collection not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/collection/collections/{collection_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Get Collection by ID",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the collection",
        "example": "3ea9a7c2-9538-46a0-899d-b2018c80113c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Collection not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/collection/collections/{collection_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Edit Collection by ID",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the collection to edit",
        "example": "3ea9a7c2-9538-46a0-899d-b2018c80113c"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Collection not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/questions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "List Questions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/questions",
    "method": "createNewQuestion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Create a New Question",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/questions/{question_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Delete Question by ID",
    "parameters": [
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the question to delete",
        "example": "4272310f-0129-4982-8849-4b20edd3f2d5"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Question deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Question not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/questions/{question_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Get Question by ID",
    "parameters": [
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the question",
        "example": "7795133a-6e36-4ef2-b95a-664babb99b71"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Question not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/questions/{question_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Edit Question by ID",
    "parameters": [
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the question to edit",
        "example": "7795133a-6e36-4ef2-b95a-664babb99b71"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Question not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/replies",
    "method": "listReplies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "List Question Replies",
    "parameters": [
      {
        "name": "questionId",
        "schema": "string",
        "description": "Filter replies by question_id (https://docs.secoda.co/",
        "example": "7795133a-6e36-4ef2-b95a-664babb99b71"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/replies",
    "method": "createNewReply",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Create a New Question Reply",
    "parameters": [
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "Replying to the question"
      },
      {
        "name": "accepted_answer",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "7795133a-6e36-4ef2-b95a-664babb99b71"
      },
      {
        "name": "owners",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/replies/{reply_id}",
    "method": "deleteReplyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Delete Question Reply by ID",
    "parameters": [
      {
        "name": "replyId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the reply to delete",
        "example": "47f9d5ab-4ae1-4eea-a8b8-6d3847829b3f"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Reply deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Reply not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/replies/{reply_id}",
    "method": "getReplyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Get Question Reply by ID",
    "parameters": [
      {
        "name": "replyId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the reply",
        "example": "47f9d5ab-4ae1-4eea-a8b8-6d3847829b3f"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Reply not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/question/replies/{reply_id}",
    "method": "editReplyById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Questions",
    "typeScriptTag": "questions",
    "description": "Edit Question Reply by ID",
    "parameters": [
      {
        "name": "replyId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the reply to edit",
        "example": "47f9d5ab-4ae1-4eea-a8b8-6d3847829b3f"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "Changing the answer."
      },
      {
        "name": "accepted_answer",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Reply not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/document",
    "method": "listDocumentsByTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "List Documents",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "Filter documents by title (https://docs.secoda.co/",
        "example": "Sample Document"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/document",
    "method": "createNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Create a New Document",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/document/{document_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete Document by ID",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the document to delete",
        "example": "1f5c76c3-e7a3-406f-b51e-7ba220244f1b"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Document deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "Document not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/document/{document_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get Document by ID",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the document",
        "example": "1f5c76c3-e7a3-406f-b51e-7ba220244f1b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Document not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/document/{document_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Edit Document by ID",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the document to edit",
        "example": "1f5c76c3-e7a3-406f-b51e-7ba220244f1b"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "404",
        "description": "Document not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/query/queries",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queries",
    "typeScriptTag": "queries",
    "description": "List Queries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/query/queries/{query_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queries",
    "typeScriptTag": "queries",
    "description": "Get Query by ID",
    "parameters": [
      {
        "name": "queryId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the query",
        "example": "871fc00d-828b-4348-9353-c635313ee459"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Query not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/monitors/monitors",
    "method": "listMonitors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitors",
    "typeScriptTag": "monitors",
    "description": "List Monitors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/monitors/monitors/{monitor_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitors",
    "typeScriptTag": "monitors",
    "description": "Get Monitor by ID",
    "parameters": [
      {
        "name": "monitorId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the monitor",
        "example": "871fc00d-828b-4348-9353-c635313ee459"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Monitor not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/monitors/incidents",
    "method": "listIncidents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitors",
    "typeScriptTag": "monitors",
    "description": "List Incidents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/monitors/incident/{incident_id}",
    "method": "getIncidentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitors",
    "typeScriptTag": "monitors",
    "description": "Get Incident by ID",
    "parameters": [
      {
        "name": "incidentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the incident",
        "example": "871fc00d-828b-4348-9353-c635313ee459"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Incident not found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/monitors/measurements",
    "method": "listMeasurements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitors",
    "typeScriptTag": "monitors",
    "description": "List Measurements",
    "parameters": [
      {
        "name": "monitor",
        "schema": "string",
        "description": "The unique identifier of the monitor",
        "example": "871fc00d-828b-4348-9353-c635313ee459"
      },
      {
        "name": "incidentId",
        "schema": "string",
        "description": "The unique identifier of the incident",
        "example": "40b3e4d3-3bf8-4ec4-ae87-56d1e738ca76"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/category",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Categories",
    "typeScriptTag": "eventCategories",
    "description": "List Event Categories",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "Filter event categories by title",
        "example": "Landing Page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/category",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event Categories",
    "typeScriptTag": "eventCategories",
    "description": "Create a New Event Category",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Landing Page"
      },
      {
        "name": "integration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ede51e4e618eaf59942c98c260"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/category/{event_category_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Categories",
    "typeScriptTag": "eventCategories",
    "description": "Get Event Category by Id",
    "parameters": [
      {
        "name": "eventCategoryId",
        "schema": "string",
        "required": true,
        "description": "ID of the event category to retrieve",
        "example": "43d7c33dad744dfbbfadc172f6701afb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/events",
    "method": "listEventsByFiltering",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List Events",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Filter by integration ID",
        "example": "cf103b4785764467ad34384cd523abd9"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Filter by parent ID",
        "example": "43d7c33dad744dfbbfadc172f6701afb"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Filter by title",
        "example": "Clicked"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/events",
    "method": "createNewEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Create a new Event",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/events/{event_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Delete Event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event to delete.",
        "example": "EVENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/events/{event_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get Event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event to retrieve.",
        "example": "226dc8aafa8d46468b116652cdc64065"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/events/{event_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Update an Event by ID",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event to update.",
        "example": "226dc8aafa8d46468b116652cdc64065"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/event_properties",
    "method": "listEventProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Properties",
    "typeScriptTag": "eventProperties",
    "description": "List Event Properties",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "description": "Filter by integration ID",
        "example": "cf103b4785764467ad34384cd523abd9"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Filter by parent ID",
        "example": "43d7c33dad744dfbbfadc172f6701afb"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Filter by title",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/event_properties",
    "method": "createNewProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event Properties",
    "typeScriptTag": "eventProperties",
    "description": "Create a new Event Property",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Sample Title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "integration",
        "schema": "string",
        "description": "",
        "example": "ca529385-fbc9-4934-afae-e372affe795b"
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "",
        "example": "df2c0597-13d9-4159-bb6d-00b3f54235dc"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/event_properties/{event_property_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Event Properties",
    "typeScriptTag": "eventProperties",
    "description": "Delete Event Property by ID",
    "parameters": [
      {
        "name": "eventPropertyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event property to delete.",
        "example": "EVENT_PROPERTY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/event_properties/{event_property_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Properties",
    "typeScriptTag": "eventProperties",
    "description": "Get Event Property by ID",
    "parameters": [
      {
        "name": "eventPropertyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event property to retrieve.",
        "example": "226dc8aafa8d46468b116652cdc64065"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/event/event_properties/{event_property_id}",
    "method": "updateByIdentifier",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Event Properties",
    "typeScriptTag": "eventProperties",
    "description": "Update an Event Property by ID",
    "parameters": [
      {
        "name": "eventPropertyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the event property to update.",
        "example": "226dc8aafa8d46468b116652cdc64065"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "04654d61-4f64-4f08-b697-3915b5137c49",
          "429693a2-a5e7-4525-b413-ece5e96bc5b3"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a description for a sample table."
      },
      {
        "name": "definition",
        "schema": "string",
        "description": "",
        "example": "\\n# Castae illa\\n\\n## Finemque aequore\\n\\nLorem markdownum motus"
      },
      {
        "name": "pii",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "verified",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "teams",
        "schema": "array",
        "description": "",
        "example": [
          "e8ac09ed-e51e-4e61-8eaf-59942c98c260",
          "cca810f1-11c1-4117-bc23-20ae8020897f"
        ]
      },
      {
        "name": "owners",
        "schema": "array",
        "description": "",
        "example": [
          "33733f42-8ff7-460b-9e20-50a2133d3bb0",
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "collections",
        "schema": "array",
        "description": "",
        "example": [
          "3b2c7185-fb5d-4d94-89d4-3dae08e093a9"
        ]
      },
      {
        "name": "subscribers",
        "schema": "array",
        "description": "",
        "example": [
          "c90dedee-40ee-47ec-9c27-96dc3b2ec363"
        ]
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Secoda API"
      apiBaseUrl="https://api.secoda.co"
      apiVersion="1.0.0"
      endpoints={54}
      sdkMethods={111}
      schemas={66}
      parameters={305}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/secoda/openapi.yaml"
      developerDocumentation="docs.secoda.co/"
    />
  );
}
  