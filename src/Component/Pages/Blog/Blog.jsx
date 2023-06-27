

const Blog = () => {
    return (
        <div>
            <p className="text-center font-bold text-3xl text-blue-800 mb-4">Question & Answer Blog</p>
            <div className="m-4 p-4 border border-black ">
                <p className="text-2xl text-blue-900">Q-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <div className="my-2 ">
                    <p className="text-slate-600"><span className="text-xl text-blue-900 font-semibold">Ans:- </span> An access token and a refresh token are commonly used in authentication and authorization systems to grant and manage user access to protected resources. </p>
                    <p className="text-xl text-blue-900 font-semibold my-2">Access Token:</p>
                    <p className="text-slate-600">An access token is a credential that is issued by an authentication server after a user successfully authenticates. It represents the user authorization to access specific resources or perform certain actions within a system or service. Access tokens should be stored securely and should not be accessible to client-side JavaScript code or other vulnerable client-side storage mechanisms like local storage. Instead, they should be stored in an HTTP-only cookie or in a browser secure token storage, such as the browser session storage or an in-memory JavaScript variable.  </p>
                    <div>
                        <p className="text-xl text-blue-900 font-semibold my-2">Refresh Token:</p>
                        <p className="text-slate-600">A refresh token is a long-lived credential that is also issued by the authentication server during the initial authentication process. Its purpose is to obtain a new access token when the current one expires. Refresh tokens are not meant to be included with every request like access tokens.Refresh tokens are even more sensitive since they have a longer lifespan. They should never be exposed to client-side JavaScript or stored in browser storage due to the risk of theft or XSS attacks. Instead, they should be securely stored in an HTTP-only cookie or in a server-side session store.</p>
                    </div>
                </div>
            </div>
            <div className="m-4 p-4 border border-black ">
                <p className="text-2xl text-blue-900">Q-2: Compare SQL and NoSQL databases?</p>
                <p className="text-xl text-blue-900 font-semibold">Ans:- </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="col border border-black">
                        <p className="text-center text-2xl font-bold text-blue-800 border border-b-black">SQL</p>
                        <p className="border border-b-black text-slate-600 p-2">SQL database are categorized as Relational Database  Management System (RDBMS).</p>
                        <p className="border border-b-black text-slate-600 p-2">SQL database have fixed or static or predefined schema.  </p>
                        <p className="border border-b-black text-slate-600 p-2 py-5">SQL databases display data in a tabular format.
                        
                        </p>
                        <p className="border border-b-black text-slate-600 p-2">
                            SQL database vertically scalable.
                        </p>
                        <p className="border border-b-black text-slate-600 p-2">SQL database use a powerful language Structured query language </p>
                        <p className=" text-slate-600 p-2">An ideal choice for the complex query intensive environment.</p>
                    </div>
                    <div className="col border border-black ">
                        <p className="text-center text-2xl font-bold text-blue-800 border border-b-black">NoSQL</p>
                        <p className="border border-b-black text-slate-600 p-2">NoSQL database are categorized Non-relational or distributive Database System.</p>
                        <p className="border border-b-black text-slate-600 p-2">NoSQL database have dynamic schema. </p>
                        <p className="border border-b-black text-slate-600 p-2"> NoSQL databases present data in various formats like documents, key-value pairs, columns, or graphs.</p>
                        <p className="border border-b-black text-slate-600 p-2">NoSQL database horizontally scalable.</p>
                        <p className="border border-b-black text-slate-600 p-2">In NoSQL database, collection of document are used to query the data.</p>
                        <p className=" text-slate-600 p-2">It is not good fit complex queries.</p>
                    </div>
                </div>
            </div>
            <div  className="m-4 p-4 border border-black ">
            <p className="text-2xl text-blue-900 my-2">Q-3: What is express js? What is Nest JS?</p>
                <div >
                    <p className="text-xl text-blue-900 font-semibold my-2">Express.js:</p>
                    <p className="text-slate-600">Express.js is a popular web application framework for Node.js. It is a minimal and flexible framework that provides a set of features for building web applications and APIs. Express.js allows developers to define routes, handle HTTP requests and responses, and implement middleware for processing requests.</p>
                </div>
                <div>
                    <p className="text-xl text-blue-900 font-semibold my-2">Nest.js:</p>
                    <p className="text-slate-600">Nest.js is a progressive TypeScript framework for building efficient, scalable, and maintainable server-side applications. Nest.js is built on top of Express.js and adds a layer of abstraction and additional features to enhance development productivity.</p>
                </div>
            </div>
            <div className="m-4 p-4 border border-black ">
                <p className="text-2xl text-blue-900 my-2">Q-4: What is MongoDB aggregate and how does it work?</p>
                <p className="text-slate-600">In MongoDB, the aggregate method is used to perform advanced data analysis and transformation operations on the documents stored in a collection. It allows you to process and combine data using a pipeline of multiple stages, providing powerful aggregation capabilities.The aggregate method in MongoDB works by applying a series of pipeline stages to the documents in a collection. Each stage performs a specific operation on the data and passes the transformed data to the next stage.</p>
            </div>
        </div>
    );
};

export default Blog;