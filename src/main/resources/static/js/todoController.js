
const createHTMLList = (index, title, description, targetdate) =>
`
        <tr>
            <th scope="row">${index}</th>
            <td>${title}</td>
            <td>${description}</td>
            <td>${targetdate}</td>
        </tr>
`;

class TodoController
{
    constructor()
    {
        // setup URL for Dev or Prod environment
        this.domainURL_Dev = "http://localhost:8080/";
        this.domainURL_Prod = "";
        this.activeURL = this.domainURL_Dev;

        this.addItemAPI = this.activeURL + "todoitem/add";
        this.allItemAPI = this.activeURL + "todoitem/all";

        this.todoList = [];       //create an array to store the details of todo list
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
        let todoController = this;
        todoController.todoList = [];

        //fetch data from db using the REST API endpoint from Spring Boot
        fetch(this.allItemAPI)
            .then((resp) => resp.json())
            .then(function(data) {
//                console.log("2. receive data")
//                console.log(data);
                data.forEach(function (item, index) {
                    // put data into temp object
                    const itemObj = {
                        id: item.todoid,
                        title: item.title,
                        description: item.description,
                        targetdate: item.targetdate
                    };
                    todoController.todoList.push(itemObj);
                });

                todoController.showTodoPage();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    showTodoPage()
    {
        let tdList = [];
        
        for (let i=0; i<this.todoList.length; i++)
        {
            const item = this.todoList[i];            //assign the individual item to the variable
            let tdate = new Date(Date.parse(item.targetdate));
            const datestr = tdate.getDate().toString().padStart(2, '0') + "/" + (tdate.getMonth() + 1).toString().padStart(2, '0') + "/" + tdate.getFullYear();
//            console.log("year " + tdate.getFullYear());
//            console.log(tdate.getMonth() + 1);
//            console.log(tdate.getDate());

            const tmpHTML = createHTMLList(item.id, item.title, item.description, datestr);
            tdList.push(tmpHTML);
        }

        const pHTML = tdList.join('\n');
        document.querySelector('#tableContent').innerHTML = pHTML; // check #row

//        console.log(pHTML);
    }
}
