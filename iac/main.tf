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
