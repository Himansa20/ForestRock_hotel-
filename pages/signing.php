<?php
// Database connection details
$host = 'sql100.infinityfree.com'; // or your host
$db = 'if0_37237624_forestrockdb';
$user = 'if0_37237624';
$pass = 'Khl8TxSeXtnsyyo';

try {
    // Create a PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Sanitize and fetch the form data
        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $mobile = htmlspecialchars($_POST['mobile']);
        $keep_logged_in = isset($_POST['keep_logged_in']) ? 1 : 0;

        // Prepare an SQL statement
        $stmt = $pdo->prepare("INSERT INTO users (name, email, mobile, keep_logged_in) VALUES (:name, :email, :mobile, :keep_logged_in)");

        // Bind parameters to statement variables
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':mobile', $mobile);
        $stmt->bindParam(':keep_logged_in', $keep_logged_in);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Sign in successful!";
        } else {
            echo "There was an error processing your request.";
        }
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Close the connection
$pdo = null;
?>
