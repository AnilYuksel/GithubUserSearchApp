class Storage {
    static addSearchHistoryToStorage(username){

        let users = this.getSearchHistoryfromStorage()

        if (users.indexOf(username)===-1){
            users.push(username)
        }else{
            alert("You have already searched this username")
        }

        localStorage.setItem("Searched Value",JSON.stringify(users))
    }

    static getSearchHistoryfromStorage(){
        
        let users;

        if (localStorage.getItem("Searched Value") === null){
            users = []
        }else {
            users = JSON.parse(localStorage.getItem("Searched Value"))
        }

        return users;
    }

    static clearStorage(){
        localStorage.removeItem("Searched Value")
    }
}