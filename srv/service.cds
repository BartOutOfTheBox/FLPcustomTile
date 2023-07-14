using com.danone.bookshop as bookshop from '../db/schema';

@(path: '/catalog')
@(requires: 'authenticated-user')
service CatalogService {
  entity Books @readonly as projection on bookshop.Books;
  entity Authors @readonly as projection on bookshop.Authors;
  entity Orders @insertonly as projection on bookshop.Orders;
}
