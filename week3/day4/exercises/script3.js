let allBoldItems;
        function getBoldItems(){
             allBoldItems = document.querySelectorAll('#paragraph strong');
            
        }

        function highlight (){
            allBoldItems.forEach(b => {
                b.style.color = 'blue';
            });
        }

        function returnItemsToDefault(){
            allBoldItems.forEach(b => {
                b.style.color = 'blue';
            });
        }
        getBoldItems()
        let para = document.getElementById('paragraph');
        para.addEventListener("mouseover",highlight)
        para.addEventListener("mouseout",returnItemsToDefault)