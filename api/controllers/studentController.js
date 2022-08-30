export default class studentController {
  getStudents(req, res, next) {
    res.json({ name: "John doe", success: true });
  }
}
