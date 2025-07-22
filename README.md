# Real-Time-Chat-Application

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: PRIYANEET KAUR RAIT

*INTERN ID*: CT04DG3155

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

*DESCRIPTION OF THE TASK*: 
          For my second task, I built a real-time chat application to learn how socket communication works between a client and server. The main goal was to create a simple web-based app where users could send and receive messages instantly, simulating a chat room experience. The application uses HTML, CSS, and JavaScript on the frontend. The backend is powered by Node.js, along with Express and Socket.io.

The structure of the application follows a client-server model. On the frontend, the interface has a basic input field for typing messages, a "Send" button, and a display box for the conversation. I styled it using a separate CSS file to keep the layout clean, user-friendly, and minimalistic. I used JavaScript to manage client-side socket events like sending messages to the server and receiving messages from the server for real-time display.

On the backend, Node.js acts as the runtime environment. Express creates the HTTP server, and Socket.io sets up a WebSocket connection between the server and all connected clients. When a user types a message and hits "Send," the client emits a socket event that the server receives. The server then broadcasts this message to all connected clients, including the sender. This allows everyone in the chat to see the same message instantly.

The application's file structure is organized to separate concerns. The public folder contains all the frontend files, including index.html, style.css, and client.js. The root directory has the main server file, server.js, along with package.json for managing dependencies. This organization made it easier to handle files and ensure proper linking between the frontend and backend.

While building the app, I encountered a few challenges. One issue arose when the browser displayed the message “Cannot GET /,” indicating that the server wasn't serving the HTML file correctly. I had to ensure that static files were served properly using Express and that the path to the public folder was correctly set. Another minor issue was verifying that all files were saved in the right directory and that there were no typos in the file names or paths since a small error in the folder structure can break the app.

After fixing these issues and setting everything up properly, I started the server using Node and accessed the app at http://localhost:3000. When I visited this URL, the chat interface loaded successfully, allowing multiple users to join and communicate in real time by opening the same page in different tabs or browsers.

Overall, this project helped me grasp the basics of real-time communication, socket events, and how the client and server interact dynamically in a Node.js environment. It was a valuable hands-on experience in both frontend and backend development, as well as debugging and managing dependencies.

*OUTPUT:* 
