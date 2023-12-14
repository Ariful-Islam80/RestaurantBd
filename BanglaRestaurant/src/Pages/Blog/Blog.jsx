

const Blog = () => {
    return (
        <>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    <div className="flex justify-center items-center">
                    <img className="lg:w-2/4" src="/src/assets/One-Way and Two-Way Data Binding.webp" alt="data Binding image" />
                    </div>
                    <h3 className="text-xl lg:text-3xl"><strong>1. What is One way data binding?
                    </strong></h3>
                </div>
                <div className="collapse-content">
                    <p className="text-lg lg:text-xl">Answer : One-way data binding is a concept in software development where the data flows in a single direction, typically from a data source to a user interface element. In this approach, changes in the data source reflect in the user interface, but changes made in the user interface do not affect the data source. It is a unidirectional flow of data.Here is a breakdown of how one-way data binding typically works: <br />1 .<strong>Data Source: </strong>This is where the data originates. It could be a database, a model, or any other source of data. <br />2 .<strong>User Interface (UI) Element: </strong>This is the component in the user interface that displays the data. It could be a text box, label, table, or any other UI element. <br />3. <strong>Binding:</strong> The data source is bound to the UI element. This means that the content of the UI element is set to the value of the data source. Any changes in the data source are automatically reflected in the UI element. <br /> 4 . <strong>Updates: </strong> If the data source changes (e.g., the underlying data is updated), the bound UI element is automatically updated to reflect the new value. However, if the user interacts with the UI element and changes its value, these changes do not propagate back to the data source. The one-way flow prevents the UI from modifying the original data source directly. <br />One-way data binding is commonly used in various frameworks and libraries for building user interfaces, such as AngularJS, React, and Vue.js. This approach simplifies the data flow and helps maintain a clear separation between the data layer and the presentation layer of an application.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <div className="flex justify-center items-center">
                    <img className="lg:w-2/4" src="/src/assets/1_y5YLuOKO5XM7MOzve6XsDQ.png" alt="node.js image" />
                 </div>
                    <h3 className="text-xl lg:text-3xl">2. What is NPM in node.js?</h3>
                </div>
                <div className="collapse-content">
                    <h4 className="text-xl lg:text-3xl"> Answer : NPM (Node Package Manager):</h4>
                    <p className="text-lg lg:text-xl"> It is the default package manager for Node.js, facilitating the installation, sharing, and management of project dependencies. Developers use NPM to install packages, manage versions, define scripts, and handle global packages. It also provides a registry for publishing and sharing packages. NPM enhances project organization, version control, and security in Node.js development.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    <div className="flex justify-center items-center ">
                    <img className="lg:w-2/4" src="/src/assets/MongoDBvsMySQL_-Architecture.png" alt="mongodb data base image" />
                    </div>
                    <h3 className="text-xl lg:text-3xl">3. Different between Mongodb database vs mySQL database.</h3>
                </div>
                <div className="collapse-content">
                    <h4 className="text-xl lg:text-2xl">MongoDB vs MySQL:</h4><br />
                    <strong className="text-lg lg:text-xl">Data Model:</strong>
                    <br /><p className="text-lg">MongoDB: NoSQL, document-based with BSON.
                    </p><br /><p className="text-lg">MySQL: SQL, table-based with a fixed schema.</p>
                    <strong className="text-lg lg:text-xl">Schema:</strong><br />
                    <p className="text-lg">MongoDB: Schema-less, dynamic data structures.
                    </p><br /><p className="text-lg">MySQL: Requires a predefined, structured schema.</p>
                    <strong className="text-lg lg:text-xl">Query Language:</strong>
                    <p className="text-lg">MongoDB: JSON-like queries.</p><br />
                    <p className="text-lg">MySQL: SQL queries.</p>
                    <strong className="text-lg lg:text-xl">Scaling</strong><br />
                    <p className="text-lg">MongoDB: Horizontal scaling with sharding.</p><br />
                    <p className="text-lg">MySQL: Traditional vertical scaling.</p>
                    <strong className="text-lg lg:text-xl">Join Operations:</strong><br />
                    <p className="text-lg">MongoDB: No native joins; relationships handled by embedding or referencing.</p><br />
                    <p className="text-lg">MySQL: Supports joins for merging data from different tables.</p>
                    <strong className="text-lg lg:text-xl">ACID Properties:</strong><br />
                    <p className="text-lg">MongoDB: ACID at the document level.</p><br />
                    <p className="text-lg">MySQL: ACID at the transaction level.</p>
                    <strong className="text-lg lg:text-xl">Scalability and Performance:</strong><br />
                    <p className="text-lg">MongoDB: Suited for horizontal scaling and fast read/write operations.</p><br />
                    <p className="text-lg">MySQL: Suited for structured data and complex queries.</p>
                    <strong className="text-lg lg:text-xl">Schema Flexibility:</strong><br />
                    <p className="text-lg">MongoDB: Flexible, adapts to evolving data requirements.</p>
                    <p className="text-lg">MySQL: Schema changes can be complex.</p>
                    <strong className="text-lg lg:text-xl">Use Cases:</strong><br />
                    <p className="text-lg">MongoDB: Rapidly changing data, unstructured/semi-structured, and horizontal scalability.</p><br />
                    <p className="text-lg">MySQL: Well-defined data relationships, transactions crucial, e.g., financial systems.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;