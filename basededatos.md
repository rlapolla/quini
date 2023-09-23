

https://www.phpmyadmin.co/

--------------------------------------------------

#    Server: 
sql10.freemysqlhosting.net

#    Name: 
sql10648299

#    Username: 
sql10648299

#    Password: 
JkCEg664kk

#    Port number: 
3306


---------------------------------------------------------


CREATE TABLE `sql10648299`.`sugeridos` ( 
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT , 
    `nombre` VARCHAR(100) NOT NULL , 
    `valor` SMALLINT UNSIGNED NOT NULL , 
    `activo` BOOLEAN NOT NULL ,
    
    PRIMARY KEY (`id`), 
    INDEX `idxnombre` (`nombre`)
    
    ) ENGINE = InnoDB;