terraform {
  cloud {
    organization = "portfolio-bperezgo"
    workspaces {
      name = "portfolio-back-bperezgo"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-02f3416038bdb17fb"
  instance_type = "t2.micro"
  #   vpc_security_group_ids = ["sg-0077..."]
  # +  subnet_id              = "subnet-923a..."

  tags = {
    Name = var.instance_name
  }
}