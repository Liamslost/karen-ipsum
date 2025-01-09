# Karen Ipsum API Documentation

## **API Endpoints**

### 1. **Get All Moods**

#### **HTTP Method**
`GET`

#### **URL**
`/moods`

#### **Description**
This endpoint retrieves a list of all available Karen moods from the database. Each mood is identified by a unique ID and a descriptive name.

#### **Response**

##### **Success (200 OK)**

**Structure:**
```json
{
  "message": "Successfully retrieved all Karen moods",
  "data": [
    {
      "_id": "string",
      "name": "string"
    }
  ]
}
```

**Example:**
```json
{
  "message": "Successfully retrieved all Karen moods",
  "data": [
    {
      "_id": "64b5f0123a4f5c6d7e8f9012",
      "name": "passive-aggressive"
    },
    {
      "_id": "64b5f0123a4f5c6d7e8f9013",
      "name": "polite"
    },
    {
      "_id": "64b5f0123a4f5c6d7e8f9014",
      "name": "manager mode"
    }
  ]
}
```

##### **Error (500 Internal Server Error)**

**Structure:**
```json
{
  "message": "Unexpected Error",
  "data": [],
  "error": "string"
}
```

**Example:**
```json
{
  "message": "Unexpected Error",
  "data": [],
  "error": "Failed to connect to the database"
}
```

---

### 2. **Get Ipsum**

#### **HTTP Method**
`GET`

#### **URL**
`/ipsum`

#### **Description**
This endpoint generates "Karen Ipsum" text based on the specified mood (by ID). Users can specify the number of sentences and paragraphs for the generated ipsum text. The quotes used for generation are retrieved from the database.

#### **Request Parameters**

| Parameter      | Type     | Required | Description                                                                 |
|----------------|----------|----------|-----------------------------------------------------------------------------|
| `id`           | `string` | Yes      | The unique ID of the Karen mood in the database. Must be a valid MongoDB ID.|
| `sentences`    | `number` | No       | The number of sentences per paragraph. Defaults to `5`.                     |
| `parragraphs`  | `number` | No       | The number of paragraphs to generate. Defaults to `1`.                      |

**Example Request URL:**
```
/ipsum?id=64b5f0123a4f5c6d7e8f9012&sentences=3&parragraphs=2
```

#### **Response**

##### **Success (200 OK)**

**Structure:**
```json
{
  "message": "Successfully retrieved",
  "data": [
    [
      "Sample sentence 1. ",
      "Sample sentence 2. ",
      "Sample sentence 3. "
    ],
    [
      "Another sample sentence 1. ",
      "Another sample sentence 2. ",
      "Another sample sentence 3. "
    ]
  ]
}
```

**Example:**
```json
{
  "message": "Successfully retrieved",
  "data": [
    [
      "I'm not mad; I'm disappointed. ",
      "Do you even know who I am? ",
      "This is unacceptable! "
    ],
    [
      "Let me speak to your manager. ",
      "I have been a customer for 10 years. ",
      "This is not how you treat people. "
    ]
  ]
}
```

##### **Error Responses**

**400 Bad Request:**
Returned when the `id` parameter is invalid or missing.

**Structure:**
```json
{
  "message": "Invalid ID"
}
```

**Example:**
```json
{
  "message": "Invalid ID"
}
```

**500 Internal Server Error:**
Returned when an unexpected error occurs.

**Structure:**
```json
{
  "message": "Unexpected Error",
  "data": [],
  "error": "string"
}
```

**Example:**
```json
{
  "message": "Unexpected Error",
  "data": [],
  "error": "Failed to connect to the database"
}
```
