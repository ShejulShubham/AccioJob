import jwt from "jsonwebtoken";

export async function adminLogin(request, response) {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({ success: false, message: "email or password cannot be empty" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    if (
      email != process.env.ADMIN_EMAIL ||
      password != process.env.ADMIN_PASSWORD
    ) {
      return response
        .status(400)
        .json({ success: false, message: "invalid login credentials" });
    }

    
    return response.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: error.message });
  }
}
