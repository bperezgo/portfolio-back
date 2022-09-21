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
  region = var.aws_region
}

resource "aws_instance" "app_server" {
  ami           = "ami-02f3416038bdb17fb"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main_public.id

  tags = {
    Name = "${var.app_name} ec2 instance"
  }
}

resource "aws_ecr_repository" "container_registry_repository" {
  name                 = "portfolio-back"
  image_tag_mutability = "MUTABLE"
  force_delete = false

  image_scanning_configuration {
    scan_on_push = true
  }
}