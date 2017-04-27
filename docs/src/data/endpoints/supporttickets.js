module.exports = {"name":"Support Tickets","sort":0,"base_path":"/support/tickets","description":"Support tickets allow you to view, submit, and manage requests for help to the Linode support team.\n","endpoints":[{"type":"list","resource":"supportticket","authenticated":true,"description":"Manage the support tickets your account can access.\n","methods":[{"oauth":"tickets:view","description":"Returns a list of <a href=\"#object-supportticket\">Support Tickets</a>.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/support/tickets\n"}],"name":"GET","resource":{"name":"Support Ticket","description":"Support ticket objects describe requests to the Linode support team.\n","schema":[{"name":"id","description":"This ticket's ID","type":"integer","value":1234},{"name":"summary","description":"This is summary or title for the ticket.","type":"string","value":"A summary of the ticket."},{"name":"description","description":"The full details of the issue or question.","type":"string","value":"More details about the ticket."},{"name":"status","description":"The status of the ticket.","type":"enum","value":"open"},{"name":"dnszone_id","description":"The DNS zone this ticket is regarding, or null.","type":"integer","value":456},{"name":"linode_id","description":"The Linode this ticket is regarding, or null.","type":"integer","value":789},{"name":"nodebalancer_id","description":"The NodeBalancer this ticket is regarding, or null.","type":"integer","value":123},{"name":"opened","type":"datetime","value":"2017-02-23T11:21:01"},{"name":"closed","type":"datetime","value":"2017-02-25T03:20:00"},{"name":"closed_by","description":"The user who closed this ticket.","type":"string","value":"some_user"},{"name":"updated","type":"datetime","value":"2017-02-23T11:21:01"},{"name":"updated_by","description":"The user who last updated this ticket.","type":"string","value":"some_other_user"}],"enums":[{"new":"The support ticket has just been opened.","open":"The support ticket is open and can be replied to.","closed":"The support ticket is completed and closed.","name":"Status"}],"endpoints":null,"methods":null}},{"oauth":"tickets:create","description":"Submit a new question and request help from the Linode support team. Only one of dnszone_id, linode_id, and nodebalancer_id can be set on a single ticket.\n","params":[{"description":"A short summary or title for the support ticket.\n","type":"string","name":"summary"},{"description":"The complete details of the support request.\n","type":"string","name":"description"},{"description":"The DNS zone this ticket is regarding, if relevant.\n","type":"int","optional":true,"name":"dnszone_id"},{"description":"The Linode this ticket is regarding, if relevant.\n","type":"int","optional":true,"name":"linode_id"},{"description":"The NodeBalancer this ticket is regarding, if relevant.\n","type":"int","optional":true,"name":"nodebalancer_id"}],"examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\n        \"summary\": \"A question about a Linode\",\n        \"description\": \"More details about the question\",\n        \"linode_id\": 123,\n    }' \\\n    https://$api_root/$version/support/tickets\n"}],"name":"POST"}],"endpoints":null,"path":"support/tickets"},{"type":"resource","resource":"supportticket","authenticated":true,"description":"Manage a particular support ticket your account can access.\n","methods":[{"oauth":"tickets:view","description":"Returns information about this <a href=\"#object-supportticket\">support ticket</a>.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/support/ticket/$ticket_id\n"}],"name":"GET","resource":{"name":"Support Ticket","description":"Support ticket objects describe requests to the Linode support team.\n","schema":[{"name":"0"},{"name":"1"},{"name":"2"},{"name":"3"},{"name":"4"},{"name":"5"},{"name":"6"},{"name":"7"},{"name":"8"},{"name":"9"},{"name":"10"},{"name":"11"}],"enums":[{"new":"The support ticket has just been opened.","open":"The support ticket is open and can be replied to.","closed":"The support ticket is completed and closed.","name":"0"}],"endpoints":null,"methods":null}}],"endpoints":null,"path":"support/tickets/:id"},{"type":"list","resource":"supportticketreply","authenticated":true,"description":"Manage the replies to a particular support ticket.\n","methods":[{"oauth":"tickets:view","description":"Returns a list of <a href=\"#object-supportticketreply\">support ticket replies</a>.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/support/tickets/$ticket_id/replies\n"}],"name":"GET","resource":{"name":"Support Ticket Reply","description":"This represents a reply to a support ticket.\n","schema":[{"name":"id","description":"This ticket's ID","type":"int","value":1234},{"name":"description","description":"The body of this ticket reply.","type":"string","value":"More details about the ticket."},{"name":"created","description":"A timestamp for when the reply was submitted.","type":"datetime","value":"2017-02-23T11:21:01"},{"name":"created_by","description":"The user who submitted this reply.","type":"string","value":"some_other_user"}],"endpoints":null,"methods":null}},{"oauth":"tickets:modify","description":"Add a new reply to an existing support ticket.\n","params":[{"description":"The reply to attach to the support ticket.\n","type":"string","name":"description"}],"examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\n        \"description\": \"More details about the ticket\",\n    }' \\\n    https://$api_root/$version/support/tickets/$ticket_id/replies\n"}],"name":"POST"}],"endpoints":null,"path":"support/tickets/:id/replies"},{"type":"list","resource":"supportticket","authenticated":true,"methods":[{"oauth":"tickets:modify","description":"Add a file attachment to a particular support ticket.\n","params":[{"description":"The file to attach. There is a 5MB size limit.\n","type":"string","name":"file"}],"examples":[{"name":"curl","value":"curl -H \"Content-Type: multipart/form-data\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST \\\n    -F file=@/path/to/file \\\n    https://$api_root/$version/support/tickets/$ticket_id/attachments\n"}],"name":"POST"}],"endpoints":null,"path":"support/tickets/:id/attachments"}],"basePath":"/support/tickets","methods":null};