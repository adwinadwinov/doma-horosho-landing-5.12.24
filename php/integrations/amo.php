<?php

require_once 'access.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$callback = $_POST['callback'];

$pipeline_id = 8611066; // Воронка
$user_amo = 11676286; // Ответственный

$link = 'https://' . $subdomain . '.amocrm.ru/api/v4/leads/complex'; 
$headers = [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $access_token
];

$data = [
    [
        "name" => $name,
        "responsible_user_id" => (int)$user_amo,
        "pipeline_id" => (int)$pipeline_id,
        "_embedded" => [
            "contacts" => [
                [
                    "first_name" => $name,
                    "custom_fields_values" => [
                        [
                            "field_code" => "PHONE",
                            "values" => [
                                [
                                    "enum_code" => "MOB",
                                    "value" => $phone
                                ]
                            ],
                            "field_id" => 739067,
                            "values" => [
                                [
                                    "value" => $callback
                                ]
                            ]
                        ],
                        
                    ]
                ]
            ],
        ],
        "custom_fields_values" => [
            [
                "field_id" => 735401,
                "values" => [
                    [
                        "enum_id" => 754301,
                        "value" => "Шкаф"
                    ]
                ]
                
            ],
        ]
    ]
];

$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
/** Устанавливаем необходимые опции для сеанса cURL  */
curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
curl_setopt($curl,CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl,CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl,CURLOPT_HEADER, false);
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
var_dump($out);
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);
/** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
$code = (int)$code;
$errors = [
    400 => 'Bad request',
    401 => 'Unauthorized',
    403 => 'Forbidden',
    404 => 'Not found',
    500 => 'Internal server error',
    502 => 'Bad gateway',
    503 => 'Service unavailable',
];

try
{
    /** Если код ответа не успешный - возвращаем сообщение об ошибке  */
    if ($code < 200 || $code > 204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undefined error', $code);
    }
} catch(\Exception $e)
{
    die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
}

$Response = json_decode($out, true);
var_dump($Response);
