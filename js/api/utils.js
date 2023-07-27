export async function get(target_url, responseFunction) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(target_url, requestOptions);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log('error', error);
  }
}

export async function post(target_url, dataJson) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(dataJson);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch(target_url, requestOptions);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
