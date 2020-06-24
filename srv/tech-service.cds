using {Products, Suppliers} from '../db/schema';

service TechService {

    entity ProductSet as SELECT from Products {*, 
    supplier.name as supplierName, supplier.contactName as supplierContact};

    entity SupplierSet as select from Suppliers;

}