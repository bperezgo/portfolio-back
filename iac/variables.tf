variable "app_name" {
  description = "Application name to identify the resources in the tag"
  type        = string
}

variable "app_environment" {
  description = "Environment where is deployed the application"
  type        = string
}

variable "public_subnets" {
  description = "List of public subnets"
}

variable "private_subnets" {
  description = "List of private subnets"
}

variable "availability_zones" {
  description = "List of availability zones"
}

variable "aws_region" {
  type = string
  description = "Aws Region"
}

variable "cidr" {
  type = string
  description = "The CIDR block for the VPC."
}