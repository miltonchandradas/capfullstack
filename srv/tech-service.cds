using {demo} from '../db/schema';

service TechService {

    entity Products as SELECT from demo.Products {*, 
    supplier.name as supplierName, supplier.contactName as supplierContact};

    entity Suppliers as select from demo.Suppliers;
}