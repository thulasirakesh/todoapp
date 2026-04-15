export default function Requirment({validations, userNameRegex, userName}) {
  return (
    <>
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-2">Username Requirement</p>

        <ul className="space-y-1 text-sm">
          <li
            className={
              userNameRegex?.test(userName) ? "text-green-600" : "text-red-500"
            }
          >
            {userNameRegex?.test(userName) ? "✔" : "✖"} Min 3 & Max 20 Characters
          </li>
        </ul>
      </div>
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-2">Password Requirements</p>

        <ul className="space-y-1 text-sm">
          <li
            className={validations.capital ? "text-green-600" : "text-red-500"}
          >
            {validations.capital ? "✔" : "✖"} One uppercase letter
          </li>

          <li className={validations.small ? "text-green-600" : "text-red-500"}>
            {validations.small ? "✔" : "✖"} One lowercase letter
          </li>

          <li
            className={validations.number ? "text-green-600" : "text-red-500"}
          >
            {validations.number ? "✔" : "✖"} One number
          </li>

          <li
            className={validations.special ? "text-green-600" : "text-red-500"}
          >
            {validations.special ? "✔" : "✖"} One special character (!@#$%&*?)
          </li>

          <li
            className={validations.length ? "text-green-600" : "text-red-500"}
          >
            {validations.length ? "✔" : "✖"} Minimum 8 characters
          </li>
        </ul>
      </div>
    </>
  )
}
