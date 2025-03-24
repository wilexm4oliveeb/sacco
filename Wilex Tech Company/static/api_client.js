
document.getElementById('ajaxsubmitBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent full-page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Send data to the server asynchronously
    fetch('http://localhost:8080/api/hello', }
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                name: name,
                email: email

            }),
    })
        .then(res => res.json())
        .then(data => {
            console.log('Response:', JSON.stringify(data));
            var txt = '
            <table>
                <tr>
                    <td>Name:</td><td>${data.name}
                </tr>
                <tr>
                    <td>Email:</td><td>${data.email}
                </tr>       
            </table>
            ';
            

            document.getElementById('messageOuptput').innerHTML = txt; 
            document.getElementById('userForm').requestFullscreen();
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('helloServerBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent full-page reload

    document.getElementById('messageOutput').innerText = "Processing Request....";
    const name = document.getElementById('name').value;
    // Send data to the server asynchronously
    fetch('http://localhost:8080/api/hello')
        .then(res => {
            if (res.status === 200) {
                return res.text();
            } else {

            }
        })
        .then(data => {
            console.log('Response:', data);
            document.getElementById('messageOutput').innerText = data;
        })

        .catch(error => console.error('Error:', error));
});