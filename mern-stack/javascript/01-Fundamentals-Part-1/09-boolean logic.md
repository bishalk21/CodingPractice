# Boolean Logic

- Boolean logic is a way to combine boolean values to create more complex boolean values
- Boolean logic is used to create more complex conditions in if statements

| Operator | Description | Example         |
| -------- | ----------- | --------------- |
| &&       | and         | true && true    |
| \|\|     | or          | true \|\| false |
| !        | not         | !true           |

# AND

| condition 1 | condition 2 | Operator | Result |
| ----------- | ----------- | -------- | ------ |
| true        | true        | &&       | true   |
| true        | false       | &&       | false  |
| false       | true        | &&       | false  |
| false       | false       | &&       | false  |

# OR

| condition 1 | condition 2 | Operator | Result |
| ----------- | ----------- | -------- | ------ |
| true        | true        | \|\|     | true   |
| true        | false       | \|\|     | true   |
| false       | true        | \|\|     | true   |
| false       | false       | \|\|     | false  |

# NOT

| condition 1 | Operator | Operator | Result |
| ----------- | -------- | -------- | ------ |
| true        |          | !        | false  |
| false       |          | !        | true   |
