var total=0;

function showBill(order,Price,quantity){

    var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = order;
			list2[x] = quantity;
			list3[x] = Price;
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			
            total+=Price;
            document.getElementById("total").innerHTML = "₹"+total;

			n++;
			x++;
    // console.log("executed hain ji");
    // console.log(order);
    // console.log(Price);
    // console.log(quantity);
}

        var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			
		}

function addItem(){

    var coffee = document.getElementById("coffee").value;
    var addon =  document.getElementById("add-ons").value;
    var quantity =  document.getElementById("quantity").value;
    var Price=0;
    var order="";
    
// console.log(quantity);

        if (coffee=='c1') {
            
            if (addon == 'a1') {
                Price = quantity*(60);
                order = "Espresso with Milk";
                showBill(order,Price,quantity)
                
            }

            else if (addon == 'a2') {
                Price = quantity*(75);
                order = "Espresso with Cream";
                showBill(order,Price,quantity)
            }

            else if (addon == 'a3') {
                Price = quantity*(100);
                order = "Espresso with Latte";
                showBill(order,Price,quantity)
            }
        }

        else if (coffee=='c2') {
            
            if (addon == 'a1') {
                Price = quantity*(80);
                order = "Cappuccino with Milk";
                showBill(order,Price,quantity)
            }

            else if (addon == 'a2') {
                Price = quantity*(90);
                order = "Cappuccino with Cream";
                showBill(order,Price,quantity)
            }

            else if (addon == 'a3') {
                Price = quantity*(125);
                order = "Cappuccino with Latte";
                showBill(order,Price,quantity)
            }
        }

        else if (coffee=='c3') {
            
            if (addon == 'a1') {
                Price = quantity*(100);
                order = "Latte with Milk";
                showBill(order,Price,quantity)
            }

            else if (addon == 'a2') {
                Price = quantity*(125);
                order = "Latte with Cream";
                showBill(order,Price,quantity)
            }

            else if (addon == 'a3') {
                Price = quantity*(150);
                order = "Latte with Latte";
                showBill(order,Price,quantity)
            }
        }

        // console.log(order);
        // console.log(Price);
        // console.log(quantity);


}




function showtotal(total){
    
}
        
    












