<?php
header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data, TRUE);
try{
    $pdo = new PDO('mysql:host=jonathmuser.mysql.db;port=3306;dbname=jonathmuser','jonathmuser', 'Xi2g6QP3k');
    $retour["success"] = true;
    $retour["message"] = "Connexion à la base réussie";
} catch(Exception $e){
    $retour["success"] = false;
    $retour["message"] = $e;
}

$retour["data"] = $data;

if(!empty($retour["data"])){
    $requete = $pdo->prepare("INSERT INTO Emailing (email, name, reason, message) VALUES (:email, :name, :reason, :message)");
    $requete->bindParam(':email',  $data["email"]);
    $requete->bindParam(':name',  $data["name"]);
    $requete->bindParam(':reason',  $data["reason"]);
    $requete->bindParam(':message',  $data["message"]);

    $requete->execute();
    $retour["success"] = true;
    $retour["message"] = "Connexion à la base réussie";

    echo json_encode($retour);
    
    $to = "jnt.rodrigues68@gmail.com";
    $subject = "Contact depuis votre site de " . $data["name"];
    $txt = "Bonjour" . "\r\n" . "Contact via votre formulaire" . "\r\n" . "Email : " . $data["email"] . "\r\n" . "Découvert via " . $data["reason"] . "\r\n" .
    "Message :" . $data["message"];
    $headers = "From: admin@jonathanrodrigues.fr";

    mail($to,$subject,$txt,$headers);

} else {
    $retour["success"] = false;
    $retour["message"] = "Formulaire invalide";
    echo json_encode($retour);
}



//return json_encode($retour);




/*
$retour = array();
$retour["success"] = true;
$retour["message"] = "OK";
$retour["results"]["contact"] = array("text@email.fr", "test duTest", "how", "Salut");
*/


/*switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'jnt.rodrigues68@gmail.com';
        $subject = 'new message';
        $headers = "From: $name <$email>";

        mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}*/
?>
