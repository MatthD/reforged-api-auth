echo -e "1. Anonymous access: \n"
curl -H 'Accept: application/json' http://localhost:3000/
echo -e "\n"
echo -e "2. Valid token : \n"
curl -H 'Accept: application/json' -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWZvcmdlZCIsImlhdCI6MTU4NzE0NDEwMiwiZXhwIjoxNjE4NjgwMTAyLCJhdWQiOiJyZWZvcmdlZC5jb20iLCJzdWIiOiJtYXR0aGlhc0BnbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJNYXR0aGlhcyIsIlN1cm5hbWUiOiJESSIsIkVtYWlsIjoibWF0dGhpYXNAZ21haWwuY29tIiwiUm9sZSI6InVzZXIifQ.ICzExRJBomBRcQ5882Au1vMeATactTh6_XwmjMhR0O8" http://localhost:3000/