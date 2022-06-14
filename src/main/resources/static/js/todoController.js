//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....


const createHTMLList = (index, title, description, targetdate) =>
`
        <tr>
            <th scope="row">${index}</th>
            <td>${title}</td>
            <td>${description}</td>
            <td>${targetdate}</td>
        </tr>
`;


//function displayProductDetails(item)
//{
//    document.querySelector("#modalName").innerText = item.name;
//    document.querySelector("#modalImg").src = item.imageUrl;
//    document.querySelector("#modalStyle").innerText = item.style;
//    document.querySelector("#modalPrice").innerText = item.price;
//
//}


class TodoController
{
    constructor()
    {
        this.domainURL_Dev = "http://localhost:8080/";
        this.domainURL_Prod = "";
        this.activeURL = this.domainURL_Dev;

        this.addItemAPI = this.activeURL + "todoitem/add";
        this.allItemAPI = this.activeURL + "todoitem/all";

        this.todoList = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItem(title, description, date)
    {
        let todoController = this;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('targetdate', date);

        fetch(this.addItemAPI, {
             method: 'POST',
             body: formData
             })
             .then(function(response) {
                 console.log(response.status); // Will show you the status
                 if (response.ok) {
                     alert("Successfully Added Product!")
                 }
             })
             .catch((error) => {
                 console.error('Error:', error);
                 alert("Error adding item to Product")
             });
    }

    displayItem() {
    // this method will fetch data from the database using REST API from Spring Boot
        let todoController = this;
        todoController.todoList = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch(this.allItemAPI)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        id: item.todoid,
                        title: item.title,
                        description: item.description,
                        targetdate: item.targetdate
                    };
                    todoController.todoList.push(itemObj);
                });

                todoController.renderProductPage();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

// here
    renderProductPage()
    {
        let productHTMLList = [];
        
        for (let i=0; i<this.todoList.length; i++)
        {
            const item = this.todoList[i];            //assign the individual item to the variable

            const productHTML = createHTMLList(item.id, item.title, item.description, item.targetdate);

            productHTMLList.push(productHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = productHTMLList.join('\n');
        document.querySelector('#tableContent').innerHTML = pHTML; // check #row

//        console.log(pHTML);
    }


}   //End of ProductsController class
