<?php
require_once 'config.php';

$link = 'https://' . $subdomain . '.amocrm.ru/oauth2/access_token';

$data = [
  'client_id'     => $client_id,
  'client_secret' => $client_secret,
  'grant_type'    => 'authorization_code',
  'code'          => $code,
  'redirect_uri'  => $redirect_uri,
];

$curl = curl_init(); //Сохраняем дескриптор сеанса cURL
/** Устанавливаем необходимые опции для сеанса cURL  */
curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
curl_setopt($curl,CURLOPT_URL, $link);
curl_setopt($curl,CURLOPT_HTTPHEADER,['Content-Type:application/json']);
curl_setopt($curl,CURLOPT_HEADER, false);
curl_setopt($curl,CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl,CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
$out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);
/** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
var_dump($out);
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
}
catch(\Exception $e)
{
    die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
}

/**
 * Данные получаем в формате JSON, поэтому, для получения читаемых данных,
 * нам придётся перевести ответ в формат, понятный PHP
 */
$response = json_decode($out, true);

$arrParamsAmo = [
	"access_token"  => $response['access_token'],
	"refresh_token" => $response['refresh_token'],
	"token_type"    => $response['token_type'],
	"expires_in"    => $response['expires_in'],
	"endTokenTime"  => $response['expires_in'] + time(),
];

$arrParamsAmo = json_encode($arrParamsAmo);

$f = fopen($token_file, 'w');
fwrite($f, $arrParamsAmo);
fclose($f);

print_r($arrParamsAmo);
