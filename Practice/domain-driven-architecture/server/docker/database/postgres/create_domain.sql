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