//middleware para autentificar si el usuario esta autorizado a realizar una acción
import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; //si es mayor sería de google

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; //id de google
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
