const url = "https://apimocha.com/jjreina/provinces1"
const options = {
	method: 'GET'
};

const provinces = async() => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

provinces()




