variable "app_name" {
  description = "Application name to identify the resources in the tag"
  type        = string
  default     = "Portfolio Back"
}

variable "app_environment" {
  description = "Environment where is deployed the application"
  type        = string
  default     = "prod"
}

// TODO: NOT USED YET
variable "availability_zones" {
  default = ["us-east-2a", "us-east-2b", "us-east-2c"]
}

variable "aws_region" {
  default = "us-east-2"
}