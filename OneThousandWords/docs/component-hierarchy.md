## Component Hierarchy

**Header Container**
  + Nav
    - 1000words Home Page Link
    - Discover Page Link
    - Upload Photo Link (visible on login)
    - Login/Sign Up Links (replaced with Profile/Logout Links on login)

  **Home Page Container**
    - Get Started button
    - Sub-Nav
      - Links to the 3 lower sections of the Home Page
    + Photo Grid Container
      - PhotoListItems
    + Unordered List of User Testimonials
      - List items of direct front/end text data
    - Get Started button

  **Session Modal Container**
    + Authentication Container
      + Login Form
        - Username Input field
        - Password Input field
        - Login button
        - Demo Login button
        - Link to Sign Up form
        - Error Component
      + Sign Up Form
        - Username Input field
        - Password Input field
        - Create Account button
        - Demo Login button
        - Link to Login form
        - Error Component

  **Profile Page Container**
    - User Profile Avatar
    - Follow Button
    - User Profile Description
    - Sub-Nav Links (visible on login)
    + Photo Grid Container
      - PhotoListItems  

  **Edit Profile Modal Container**
    - Profile description
    - Button to Photo Modal Component for selecting a Profile Avatar
    - Confirmation/Submit Button

  **Upload Photo Modal Container**
    + Cloudinary Upload Photo Widget
      - File picker
      - URL field
      - Drag and Drop/Preview section
      - Confirmation/Submit Button

  **Discover Page Container**
    + Photo Grid Container
      - PhotoListItems

  **Photo Show Modal Container**
    + Modal Header
      - User Profile Avatar
      - Username
      - Follow (or Delete Photo) Button

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer/Sign Up Form" |
| "/login" | "AuthFormContainer/Login Form" |
| "/home" | "Home Page Container" |
| "/users/:userId" | "Profile Page Container" |
| "/users/:userId/edit" | "Edit Profile Modal Container" |
| "/users/:userId/upload-photo" | "Upload Photo Modal Container" |
| "/users/:userId/:photoId" | "Photo Show Modal Container" |
| "/discover" | "Discover Page Container" |
