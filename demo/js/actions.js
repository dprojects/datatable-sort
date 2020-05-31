/* -----------------------------------------------------------------------------------------------------------------------
   TABLE
   -------------------------------------------------------------------------------------------------------------------- */

function setTable() {
    
    let tBody = '<tbody>';
    let k = 8;
    
    for (let i=0; i<k; i++) {
        
        let c = (i%2 === 0) ? '-' : parseFloat(i);
        
        let col0 = 'Item '+i;
        let col1 = '<a href="http://'+c+'example.com">'+(k-i)+' link text example</a>';
        let col2 = c;
    
        tBody += '<tr>';
        tBody += '<td class="col0">' + col0 + '</td>';
        tBody += '<td class="col1">' + col1 + '</td>';
        tBody += '<td class="col2">' + col2 + '</td>';
        tBody += '</tr>';
    }
    
    tBody += '</tbody>';
    
    // header for table
    let tHead = '<thead>';
    tHead += '<tr>';
    tHead += '<th class="col0">ID</th>';
    tHead += '<th class="col1">Link</th>';
    tHead += '<th class="col2">Value</th>';
    tHead += '</tr>';
    tHead += '</thead>';
    
    let tTable = '<table id="demo-table" class="display">';
    tTable += tHead + tBody;
    tTable += '</table>';

    document.getElementById("TABLE").innerHTML = tTable;
    
    let gTable = $('#demo-table').DataTable({
        "orderClasses": true,
        "responsive": true,
        "columnDefs": [ { "type": "sethigh", "targets": 2 },
                        { "type": "linktext", "targets": 1 } ],
        "order": [1, "asc"]
    });
    new $.fn.dataTable.FixedHeader(gTable);
    
    //gTable.order([1, 'desc']).draw();
}

/* -----------------------------------------------------------------------------------------------------------------------
   INIT PAGE
   -------------------------------------------------------------------------------------------------------------------- */
 
$(document).ready( function () {
    setTable();
});
