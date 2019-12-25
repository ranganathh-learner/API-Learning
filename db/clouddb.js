/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://ranganathh:<password>@cluster0-bbb5r.azure.mongodb.net/test?retryWrites=true&w=majority

const DB_USER = "ranganathh"
const DB_PASSWORD = "1Welcome123"
const DB_NAME = "acmetravels"
const CLUSTER_HOST = "cluster0-bbb5r.azure.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"