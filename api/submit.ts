export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, phone, demand, message } = req.body;

  // Gửi lên Google Form
  const formUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUd-MHhkhGVgOTaQhSkSPLKh5L5zYVOJc0804ooy-Fj8YfYA/formResponse";
  const params = new URLSearchParams();
  params.append("entry.2005620554", name);
  params.append("entry.1045781291", email);
  params.append("entry.1166974658", phone);
  params.append("entry.1065046570", demand);
  params.append("entry.839337160", message);

  try {
    const response = await fetch(formUrl, {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      console.log(response.status, await response.text());
      res.status(500).json({ success: false, message: "Google Form error" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Fetch error" });
  }
}
