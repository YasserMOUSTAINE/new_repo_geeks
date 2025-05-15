
select customer.first_name from customer
inner join customer_profil
on customer.id=customer_profil.customer_id
where isLoggedIn=true;

select customer.first_name,customer_profil.isLoggedIn from customer
left outer join customer_profil
on customer.id=customer_profil.customer_id;

select customer.* from customer
inner join customer_profil
on customer.id=customer_profil.customer_id
where isLoggedIn=false;

/*create table books(
	book_id serial primary key,
	title varchar(100) not null,
	author varchar(100) not null
);

create table student(
	student_id serial primary key,
	name varchar(100) not null,
	age decimal(15,0)
);

create table library(
	book_fk_id integer not null,
	student_id integer not null,
	borrowed_date date not null,
	primary key (book_fk_id,student_id),
	foreign key(student_id) references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	foreign key(book_fk_id) references books(book_id) on delete cascade on update cascade
);

insert into library(student_id,book_fk_id,borrowed_date)
values
(1,1,'2022-02-15'),
(4,3,'2021-03-03') ,
(2,1,'2021-05-23') ,
(4,2,'2021-08-12')*/
select * from library;
select student.name,books.title from student
inner join library
on student.student_id=library.student_id
inner join books 
on library.book_fk_id=books.book_id;

select avg(student.age) from student
inner join library
on student.student_id=library.student_id
inner join books 
on library.book_fk_id=books.book_id where books.title='Alice In Wonderland';
