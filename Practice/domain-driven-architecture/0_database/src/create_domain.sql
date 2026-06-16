CREATE TABLE Users (
    user_id UUID PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    biography TEXT,
    password_hash TEXT NOT NULL,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE UserSettings (
    settings_id UUID PRIMARY KEY,
    user_id UUID UNIQUE NOT NULL,
    privacy_settings JSONB NOT NULL DEFAULT '{"account_visibility":"hidden", "view_bio": "public", "view_location": "radius"}'::jsonb,
    theme_customization JSONB NOT NULL DEFAULT '{}'::jsonb,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE Departments (
    dept_id UUID PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL,
    dept_address TEXT
);

CREATE TYPE employee_level AS ENUM ('junior', 'mid', 'senior', 'lead', 'manager', 'director', 'vp', 'c-level');
CREATE TABLE Employees (
    emp_id UUID PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    emp_role employee_level,
    dept_id UUID,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id) ON DELETE SET NULL
);

CREATE INDEX idx_employees_dept_id ON Employees(dept_id);
CREATE INDEX idx_users_username ON Users(username);
CREATE INDEX idx_usersettings_privacy ON UserSettings USING GIN (privacy_settings);
CREATE INDEX idx_employees_dept_id ON Employees(dept_id);
CREATE INDEX idx_employees_senior_staff ON Employees (emp_id) WHERE emp_role IN ('senior', 'lead', 'manager', 'director', 'vp', 'c-level');

CREATE VIEW view_employee_directory AS
SELECT 
    e.emp_id,
    e.emp_name,
    e.emp_role,
    d.dept_name,
    d.dept_address
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id;

CREATE VIEW view_user_privacy_config AS
SELECT 
    u.username,
    us.privacy_settings->>'account_visibility' AS visibility_mode,
    us.privacy_settings->>'view_bio' AS bio_status
FROM Users u
JOIN UserSettings us ON u.user_id = us.user_id;