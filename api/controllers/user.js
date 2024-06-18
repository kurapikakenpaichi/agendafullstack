import{ db } from"../db.js"

;exportconstgetUsers = (_, res) =>{
    constq = "SELECT * FROM agenda";
    
    db.query(q, (err, data) =>{
        if(err) returnres.json(err);

        returnres.status(200).json(data);
    });
};
exportconstaddUser = (req, res) =>{
    constq = "INSERT INTO agenda (`nome`, `telefone`) VALUES(?)";
    constvalues = [
        req.body.nome,
        req.body.telefone,
    ];
    db.query(q, [values], (err) =>{
        if(err) returnres.json(err);
        returnres.status(200).json("Registro criado com sucesso");
    });
};
exportconstupdateUser = (req, res) =>{
    constq = "UPDATE agenda SET `nome` = ?, `telefone` = ? WHERE `id` = ?";
    constvalues = [
        req.body.nome,
        req.body.telefone,];
        db.query(q, [...values, req.params.id], (err) =>{
            if(err) returnres.jason(err);
            returnres.status(200).json("Registro atualizado com sucesso");
        });
    };
    exportconstdeleteUser = (req, res) =>{
        constq = "DELETE FROM agenda WHERE `id` = ?";
        db.query(q, [req.params.id], (err) =>{
            if(err) returnres.json(err);
            returnres.status(200).json("Registro deletado com sucesso");
        });
    };