const xhr = new XMLHttpRequest();
const url = 'http://api-to=call.com/endpoint';

xhr.responseType = 'json';

// event handler
xhr.onreadystatechange = () => {
    // to check if request is finished
    if(xhr.readyState === XMLHttpRequest.DONE){
        return xhr.response
    }
};

// creates a new request
xhr.open('GET',url)
xhr.send();

