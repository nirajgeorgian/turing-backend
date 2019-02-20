-- query to find all products
select * from product p inner join product_category pc on p.product_id = pc.product_id inner join category cg on pc.category_id = cg.category_id;
