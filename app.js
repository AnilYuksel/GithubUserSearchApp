const githubName = document.getElementById("githubname")
const githubForm = document.getElementById("github-form")
const deleteButton = document.getElementById("clear-last-users")
const searchHistory = document.getElementById("last-users")

const github = new Github()

const ui = new UI()

eventListener()

function eventListener(){
    githubForm.addEventListener("submit",getFormData)
    deleteButton.addEventListener("click",clearAllSearch)
    document.addEventListener("DOMContentLoaded",getSearchHistory)
}

function getFormData(e){
    
    let username = githubName.value.trim() //.toLowerCase()
    
    
    if(username === "" || username.indexOf(" ")>0){
        alert("Please enter a valid username: !! Usernames should not have space")
    }else{
       github.getGithubData(username)
       .then(response=>{
           if(response.user.message === "Not Found"){
               ui.errorMessage("Please enter a valid username")
           }else{
               ui.addUsernamesUIfromStorage(username)
               Storage.addSearchHistoryToStorage(username)
               ui.getUserInfo(response.user)
               ui.getUserRepos(response.repo)
           }
       })
       .catch(err=>ui.errorMessage(err))
    }

    



    ui.clearInputAfterEnterance()
    e.preventDefault();
}


function clearAllSearch(){
    Storage.clearStorage()
    ui.clearSearchedHistoryFromUI()

}

function getSearchHistory(){
    let users = Storage.getSearchHistoryfromStorage()

    users.forEach(usersinstorage => {
       searchHistory.innerHTML += `<li class="list-group-item">${usersinstorage}</li>`
    })
      
}