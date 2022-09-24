aws_region        = "us-east-2"

# these are zones and subnets examples
cidr               = "10.00.0.0/16"
availability_zones = ["us-east-2a", "us-east-2b"]
public_subnets     = ["10.0.100.0/24", "10.0.101.0/24"]
private_subnets    = ["10.0.0.0/24", "10.0.1.0/24"]

# these are used for tags
app_name        = "Portfolio-Back"
app_environment = "production"