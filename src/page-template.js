function createHtml(teamMembers) {
    const start = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/f1d7a5917a.js" crossorigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel='stylesheet' href='./style.css'>
        <title>Team Profile</title>
    </head>
    <body>
        <header class="flex justify-center items-center bg-red-500 h-32">
            <h1 class="text-4xl text-white font-medium">My Team</h1>
        </header>
    
        <main>
            <section class="card-section flex flex-row flex-wrap justify-center">
`;
const end = `
</section>
</main>
</body>
</html>`;




// Manager Card
function createManager (data) {
return `
            <div class="card w-72 h-80 bg-slate-200 m-8">
                <div class="card-title flex flex-col bg-blue-600 text-white font-medium h-28 p-4">
                    <h3 class="name text-4xl">${data.name}</h3>
                    <div class="IconRole flex flex-row text-2xl pt-2">
                        <i class="fa-solid fa-mug-hot fa-sm pt-4 pr-2"></i>
                        <p class="role">Manager</p>
                    </div>
                </div>
                <div class="card-info flex flex-col justify-center bg-white m-6 inset-y-1/4 mt-10">
                    <div class="p-2 border-2 border-b-0 border-solid">ID: ${data.id}</div>
                    <div class="p-2 border-2 border-solid">Email: ${data.email}</div>
                    <div class="p-2 border-2 border-t-0 border-solid">Office Number: ${data.officeNumber}</div>
                </div>
            </div>
    `;
};
}

module.exports = createHtml;