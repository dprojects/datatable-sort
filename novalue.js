/**
 * When sorting values in a DataTable you might want to keep a specific
 * item at the beginning or end of the column. This is very useful if You 
 * want to sort incomplete data and there is no data available for each entry 
 * in a row. If You do not have data, You can set the novalue pattern to '-' 
 * and set exact column to treat this novalue pattern '-' as the highest 
 * value or the lowest one.
 * 
 * @name novalue.js
 * @summary Keep novalue pattern at the end or at the beginning of the column.
 * 
 * @example
 *      gTable = $('#covid-table').DataTable({
 *                  "orderClasses": true,
 *                  "responsive": true,
 *                  "columnDefs": [ { "type": "sethigh", "targets": [2, ,3, 4, 7, 8] }, 
 *                                  { "type": "setlow", "targets": [5, 6] } ]
 *      });
 * 
 * To change order later:
 * 
 *      gTable.order([8, 'asc'],[6, 'desc']).draw();
 * 
 * Keep in mind there must be "desc" in this case not "dsc".
 * 
 */


/**
 * Set novalue pattern below if You want other.
 * For example:
 * 
 * var novalue = 'N/A';
 * var novalue = 'no value';
 * var novalue = 'empty';
 * 
 */

var novalue = '-';

$.extend( $.fn.dataTableExt.oSort, {

    "sethigh-asc": function ( a, b ) {
        
        let x = a;
        let y = b;
        
             if (x == novalue && y != novalue) { return  1; }
        else if (x != novalue && y == novalue) { return -1; }
        else if (x == novalue && y == novalue) { return  0; }
        else if (x != novalue && y != novalue) { 
            
            x = parseFloat(a); 
            y = parseFloat(b);
            
            return ( (x < y) ? -1 : ( (x > y) ? 1 : 0 ) );
        }
    },
    "sethigh-desc": function ( a, b ) {
        
        let x = a;
        let y = b;
        
             if (x == novalue && y != novalue) { return -1; }
        else if (x != novalue && y == novalue) { return  1; }
        else if (x == novalue && y == novalue) { return  0; }
        else if (x != novalue && y != novalue) { 
            
            x = parseFloat(a); 
            y = parseFloat(b);            
            
            return ( (x < y) ? 1 : ( (x > y) ? -1 : 0 ) );
        }
    },
    
    "setlow-asc": function ( a, b ) {
        
        let x = a;
        let y = b;
        
             if (x == novalue && y != novalue) { return -1; }
        else if (x != novalue && y == novalue) { return  1; }
        else if (x == novalue && y == novalue) { return  0; }
        else if (x != novalue && y != novalue) { 
            
            x = parseFloat(a); 
            y = parseFloat(b);
            
            return ( (x < y) ? -1 : ( (x > y) ? 1 : 0 ) );
        }
    },
    "setlow-desc": function ( a, b ) {
        
        let x = a;
        let y = b;
        
             if (x == novalue && y != novalue) { return  1; }
        else if (x != novalue && y == novalue) { return -1; }
        else if (x == novalue && y == novalue) { return  0; }
        else if (x != novalue && y != novalue) { 
            
            x = parseFloat(a); 
            y = parseFloat(b);            
            
            return ( (x < y) ? 1 : ( (x > y) ? -1 : 0 ) );
        }
    }
});
