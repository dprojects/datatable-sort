# Description

This is custom sort repository for [DataTable](https://datatables.net/).

# novalue.js

If you don't have data you can set "-" and tell DataTable to treat "-" 
as the largest or smallest value in a given column. 

##### Usage example: 

Init the table:

```
gTable = $('#covid-table').DataTable({
        "orderClasses": true,
        "responsive": true,
        "columnDefs": [ { "type": "sethigh", "targets": [2, ,3, 4, 7, 8] }, 
                        { "type": "setlow", "targets": [5, 6] } ]
    });
```
Change order later:

```
gTable.order([8, 'asc'],[6, 'desc']).draw();
```
Keep in mind there must be `"desc"` in this case not `"dsc"`.

# License

MIT
